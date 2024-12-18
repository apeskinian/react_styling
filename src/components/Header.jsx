import logo from '../assets/logo.png';

// USING CSS MODULES
// import classes from './Header.Module.css';

// USING STYLED COMPONENTS
// import { styled } from 'styled-components';

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

// & img {
//   object-fit: contain;
//   margin-bottom: 2rem;
//   width: 11rem;
//   height: 11rem;
// }

// & h1 {
//   font-size: 1.5rem;
//   font-weight: 600;
//   letter-spacing: 0.4em;
//   text-align: center;
//   text-transform: uppercase;
//   color: #9a3412;
//   font-family: 'Pacifico', cursive;
//   margin: 0;
// }

// & p {
//   text-align: center;
//   color: #a39191;
//   margin: 0;
// }

// @media (min-width: 768px) {

//   margin-bottom: 4rem;

//   & h1 {
//     font-size: 2.25rem;
//   }
// }
// `

// export default function Header() {
//   return (
//     <StyledHeader>
//       <img src={logo} alt="A canvas" />
//       <h1>ReactArt</h1>
//       <p>A community of artists and art-lovers.</p>
//     </StyledHeader>
//   );
// }

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      />
      <h1 className="text-xl md:text-4xl uppercase font-semibold tracking-widest text-center text-amber-800 font-reactart">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
