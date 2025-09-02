import {Octokit} from "@octokit/core";
import {NextResponse} from "next/server";

// In-memory cache to prevent rate limits
let cache = null;
let lastFetch = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // GitHub token from your .env.local file
});

export async function GET(request) {
  try {
    const {searchParams} = new URL(request.url);
    const username = searchParams.get("username") || process.env.GITHUB_USERNAME;

    // Return cached version if it's still fresh
    if (cache && Date.now() - lastFetch < CACHE_TTL) {
      return NextResponse.json(cache);
    }

    // Fetch user info
    const userRes = await octokit.request("GET /users/{username}", {
      username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    // Fetch repos
    const reposRes = await octokit.request("GET /users/{username}/repos", {
      username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    // Sort repos by stars and take top 3
    const topRepos = reposRes.data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }));

    const responseData = {
      login: userRes.data.login,
      name: userRes.data.name,
      avatar_url: userRes.data.avatar_url,
      html_url: userRes.data.html_url,
      followers: userRes.data.followers,
      public_repos: userRes.data.public_repos,
      top_repos: topRepos,
    };

    // Cache the result
    cache = responseData;
    lastFetch = Date.now();

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json({error: "Failed to fetch GitHub info"}, {status: 500});
  }
}
