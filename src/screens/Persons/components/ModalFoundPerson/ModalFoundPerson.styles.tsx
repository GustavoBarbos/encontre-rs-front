import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .columns-container {
        display: flex;
        flex-direction: row;
        
        .column {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-around;
            padding: 10px;

            img {
                max-width: 100%;
                max-height: 400px;
                width: 400px;
                border-radius: 8px;
            }
            
            .box {
                border: 1px solid black;
                padding: 5px;
            }
    }
    

}
`;
