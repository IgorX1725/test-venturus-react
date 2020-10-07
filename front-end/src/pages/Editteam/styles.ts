import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:#fff;
    border-radius: 20px;
    margin: 40px;
    width:90%;

    form{
        display:grid;
        grid-template-columns: repeat(2, 50%);
    

    @media(max-width: 800px) {
        display:flex;
        flex-direction:column;

    }
    }
`;

export const Formsection = styled.div`
    display:flex;
    justify-content: center;
    margin: 30px 0;
    color: rgb(186,186,186);
`;

export const Title = styled.h2`
    display:flex;
    justify-content:flex-start;
    width:100%;
    border-bottom-style: solid;
    border-bottom-width:1px;
    border-bottom-color: rgba(186,186,186,0.5);
    font-size:30px;
    padding:20px;
    color: #00f;
    font-weight: 600;
`;



export const Inputcontent = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 50px;
    margin-bottom: 30px;

    input{
        border: 1px solid rgb(186,186,186);
        border-radius: 5px;
        height: 30px;
        padding:10px;
    }
    label{
        margin-bottom: 10px;
    }
`;

export const Descripton = styled.textarea`
    resize: none;
    height: 200px;
    border: 1px solid rgb(186,186,186);
    border-radius: 5px;
    font-size:14px;
    padding: 20px;
`;

export const TagArea = styled.div`
    display:flex;
    height: 120px;
    border: 1px solid rgb(186,186,186);
    border-radius: 5px;
    padding:10px;
    flex-wrap: wrap;

    input{
        font-size:16px;
        border:none;
        padding:0;
        padding: 5px 10px;
    }
`;

export const RadioContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;



export const Tag = styled.span`
    display:flex;   
    justify-content:center;
    background-color:#DB1F61;
    border-radius:15px;
    font-size:14px;
    padding: 5px 10px;
    height: 25px;
    color: #fff;
    margin-right: 5px;
    svg{
        font-size: 16px;
        margin-left: 5px;
    }
    
`;

export const Save = styled.button`
    width:150px;
    padding: 10px;
    margin: 30px;
    background: linear-gradient(0deg, rgba(128,34,195,1) 24%, rgba(226,45,253,1) 100%);
    border-radius:9px;
    border:0;
    color:#fff;
    font-weight: 700;
`;