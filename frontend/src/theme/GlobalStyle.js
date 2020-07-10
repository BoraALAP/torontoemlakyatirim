import { createGlobalStyle } from "styled-components"
import Media from "./Media"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Poppins:200,300,400,500,600,700,800&display=swap');
  body{
    margin: 0;
    font-family: ${props => props.theme.font.familyB};    
  }

  .ReactModal__Body--open{
    overflow-y: hidden;
  }

  .ReactModal__Overlay{
    overflow-y: auto;
  }

  a{
    color: ${props => props.theme.color.link};
    font-weight: ${props => props.theme.font.weight.semibold};
    text-decoration: none;
  }

  img.icon{
    min-width: 1.5em;
    min-height: 1.5em;
  }

  h1,h2,h3,h4,h5,h6{
    color: ${props => props.theme.color.accent};
    font-weight: ${props => props.theme.font.weight.semibold} ;
    margin: 0;
    font-family: ${props => props.theme.font.familyH};
  }

  h1{
    margin:0.5em 0;
    font-size: 2em;
  }

  h2{
   font-size: 1.875em;
  }

  h3{
   font-size: 1.5em;
  }

  h4{
   font-size: 1.375em;
   font-weight: ${props => props.theme.font.weight.semibold}  
  }

  h5{
   font-size: 1.25em;
  }

  h6{
   font-size: 1em;
  }

  p, li{
    line-height:1.75em;
    font-size:0.875em;
    color: ${props => props.theme.color.bodyCopy};
    max-width: 600px;
    @media ${Media.laptop} {
      font-size: 0.875em;
    }
  }

  @media ${Media.tablet}{
    h1{
      margin:0.5em 0;
      font-size: 2.5em
    }
  
    h2{
     font-size: 2em;
    }
  
    h3{
     font-size: 1.875em;
    }
  
    h4{
     font-size: 1.5em;
     font-weight: ${props => props.theme.font.weight.semibold}  
    }
  
    h5{
     font-size: 1.375em;
    }
  
    h6{
     font-size: 1.125em;
    }
  
    p,li{
      line-height:1.75em;
      font-size:1em;
      color: ${props => props.theme.color.bodyCopy};
      @media ${Media.laptop} {
        font-size: 0.875em;
      }
    }
  }

  small{
    color: ${props => props.theme.color.accent};
  }

  ul{
    margin: 0;
    padding-left: calc(${props => props.theme.gutter} *2) ;
    margin: 1em auto ;
    li{
      color: ${props => props.theme.color.bodyCopy}  
    }
  }

  input,  textarea{
    padding: 24px;
    border: 1px solid ${props => props.theme.color.border};
  }

  button{
    border: none;
    background: none;
    padding: 0;
    font-size: 1em;
    font-weight: ${props => props.theme.font.weight.semibold};
    font-family: ${props => props.theme.font.familyB};    
  }

  .modalOpen{
    overflow-y:hidden;
  }

  hr{
    background-color: ${props => props.theme.color.border};
    height: 1px;
    width: 80%;
    display:grid;
    border:none;
    margin:0 auto;
  }

  .slick-slide{
    text-align:center;
  } img{
    max-width: 100%;
  }

  .pageLayout{
    width: 100vw;
    box-sizing: border-box;
    padding: ${props => props.theme.margin};
  }

`
