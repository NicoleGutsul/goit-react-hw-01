import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    text-align: center;
    border-spacing:0;
    
`;

export const Thead = styled.thead`
    height: 50px;
`;

export const Th = styled.th`
    background-color: #3246C9;
    color:#fff;
    border-right:1px solid #ccc;
`;

export const Tr = styled.tr`
    :nth-child(even) {
        background-color: grey;
    }
    td {
        height: 50px;
        border-right:1px solid #ccc;
    }
`;