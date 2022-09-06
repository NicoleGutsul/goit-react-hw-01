import styled from 'styled-components'

export const LiItem = styled.li`
    display: flex;
    justify-content: center;
    align-items:center;
    padding:10px;
    border:1px solid #ccc;
    width:300px;
    margin-bottom: 5px;
    box-shadow: 0px 2px 5px #ccc;
`

export const OnlineStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: ${ p => (p.isOnline ? 'green': 'red') };
`