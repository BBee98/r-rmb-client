import {useTranslation} from 'react-i18next';

export const Create = ({fieldName}: { fieldName: string }) => {
    const {t} = useTranslation()
    return <button>{t(`form.create.${fieldName}`)}
    </button>
}


