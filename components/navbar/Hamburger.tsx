// import styled from "styled-components";

// export interface StateProps {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// const StyledBurger = styled.div<StateProps>`
//   width: 2rem;
//   height: 2rem;
//   position: absolute;
//   top: 1;
//   right: 15px;
//   z-index: 1000;
//   display: none;

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: ${({open}) => (open ? "#ccc" : "#333")};
//     border-radius: 10px;
//     transform-origin: 1px;
//     transition: all 0.3s linear;

//     &:nth-child(1) {
//       transform: ${({open}) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }
//     &:nth-child(2) {
//       transform: ${({open}) => (open ? "translateX(100%)" : "translateX(0)")};
//       opacity: ${({open}) => (open ? 0 : 1)};
//     }
//     &:nth-child(3) {
//       transform: ${({open}) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }

//   @media (max-width: 600px) {
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//   }
// `;

// const Hamburger = ({open, setOpen}: StateProps) => {
//   return (
//     <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// };

// export default Hamburger;

"use client";

import clsx from "clsx";

export interface StateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Hamburger = ({open, setOpen}: StateProps) => {
  return (
    <div className="absolute hidden sm:flex items-center justify-center top-4 left-4 z-[1000] bg-black/50 w-20 h-20 rounded-full">
      <button
        className={clsx("w-8 h-8 flex flex-col justify-around items-center", open && "ml-2.5")}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu">
        <span
          className={clsx(
            "block w-8 h-1 rounded bg-white transition-transform duration-300 ease-linear origin-left",
            open && "rotate-45"
          )}
        />
        <span
          className={clsx(
            "block w-8 h-1 rounded bg-white transition-all duration-300 ease-linear",
            open ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          )}
        />
        <span
          className={clsx(
            "block w-8 h-1 rounded bg-white transition-transform duration-300 ease-linear origin-left",
            open && "-rotate-45"
          )}
        />
      </button>
    </div>
  );
};

export default Hamburger;
