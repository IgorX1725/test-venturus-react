import styled from 'styled-components'

export const Container = styled.div`
    width:700px;
    height: 100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    border-radius: 10px;
    
    background: #fff;
    box-shadow: 10px 10px 10px -10px rgba(0,0,0,0.75);
`;

export const TeamList = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const Header = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom-style:solid;
    border-bottom-color:rgba(186,186,186,0.5);
    border-bottom-width:1px;
    height:70px;
    padding:20px;

    a{
    border:none;
    background:transparent;
    width:35px;
    height:35px;
    display:flex;
    justify-content:center;
    align-items: center;
    color:#fff;
    transition: transform 0.2s;

    &:hover{
        transform: translateX(3px);
    }

    svg{
        width:60%;
        height:60%;
    }
    background: linear-gradient(0deg, rgba(128,34,195,1) 24%, rgba(226,45,253,1) 100%);
    border-radius:9px;
    box-shadow: 0px 7px 15px -4px rgba(191,77,209,1);
    }
` ;

export const Title = styled.h2`
    color:purple;
    font-size:30px;
    font-weight:700;
`;

export const Tablelist = styled.table`
flex:1;
color: #000; 
margin-top:35px;
padding:10px;
font-weight: 700;
    tr{
        display:grid;
        grid-template-columns: 30% 70%;
        border-bottom-style:solid;
        border-bottom-color:rgba(186,186,186,0.5);
        border-bottom-width:1px;

        th{
            span:hover{
                cursor:pointer;
            }
        }
        
        td,th{
        display:flex;
        justify-content:space-between;
        padding:15px;

            button{
                border: none;
                background:transparent;
            }

            button:hover{
                color: #6A04A4;
            }
        }

    }
    tbody{
        tr:hover{
            background-color:#FBF4FF;
            color: #6A04A4;
            
        }
    }
`;

export const Iconslist = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100px;

    svg:hover{
        cursor: pointer;
    }

`;