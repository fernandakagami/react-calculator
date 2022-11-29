import { ButtonContainer } from './styles';

export default function Button ( {label, onCLick}) {
    return (
        <ButtonContainer onClick={onCLick}>
            {label}
        </ButtonContainer>        
    )
}