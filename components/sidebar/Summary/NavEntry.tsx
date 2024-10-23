import Nav from "./Nav";
import { useTranslations } from "next-intl";

export default function NavEntry() {

    const t = useTranslations('Summary')

    return (
        <>
            <Nav content={{
                title: t('title'),
                name1: t('names.name1'),
                name2: t('names.name2'),
                name3: t('names.name3'),
                name4: t('names.name4'),
                name5: t('names.name5'),
                name6: t('names.name6'),
                name7: t('names.name7'),
            }}/>
        </>
    )
}