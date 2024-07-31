import { useTranslations } from "next-intl";
import ThemeSelector from "./ThemeSelector";

export default function ThemeSelectorEntry() {

    const t = useTranslations('ThemeSelector')

    return (
        <>
            <ThemeSelector content={t('title')}/>
        </>
    )
}