/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { FromLanguage, Language } from '../types'

// interface Props {
//     onChange: (language: Language) => void
// }

type Props = 
| { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
            {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar Idioma</option> }
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )

}