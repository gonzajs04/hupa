import styled from 'styled-components'; //DEPENDENCIA npm i styled-components
export const LinkButton = styled.a`
            text-decoration: none;
            color: rgba(255, 255, 255, 0.774);
            padding: .3rem .3rem;
            font-size: .6rem;
            border: 2px solid rgba(255, 255, 255, 0.774);
            border-radius: 1px;
            transition: .5s all ease-in-out ;
            font-weight: 700;
            &:hover{
                background-color: white;
                color: black;
                cursor:pointer;
            }
            @media(min-width:768px){
                font-size: .9rem;
                padding: .6rem .7rem;


            }

`

