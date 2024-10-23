import Nav from "./Nav";
import { useTranslations } from "next-intl";

export default function NavEntry() {

    const t = useTranslations('Summary')

    return (
        <>
            <Nav content={{
                title: t('title'),
                name1: t('content.content_1'),
                name2: t('content.content_2'),
                name3: t('content.content_3'),
                name4: t('content.content_4'),
            }}/>
        </>
    )
}