import styled from 'styled-components';

const Button = styled.button`
    font-size: 18rem;
    padding: 14px 35px;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border-radius: 4px;
    border: 1px solid var(--color-gray-light);
    cursor:pointer;

    &:hover,
    &:focus{
        opacity:.5;
    }
`;

export default Button;