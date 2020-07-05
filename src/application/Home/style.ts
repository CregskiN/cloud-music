import styled from 'styled-components';
import globalStyle from '../../assets/global-style';

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    background-color: ${globalStyle['theme-color']};
    a {
        flex: 1;
        /* 
            flex-grow: 1;
            flex-basis: 0%;
            flex-shrink: 1;
         */
        padding: 2px 0;
        font-size: 14px;
        color: #e4e4e4;
    }
    &.selected {
        span {
            padding: 30px 0;
            font-weight: 700;
            color: #f1f1f1;
            border-bottom: 2px solid #f1f1f1;
        }
    }
`