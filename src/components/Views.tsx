import '../locales/config';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Main() {
    const homePage = useLocation().pathname === "/"
    const { t } = useTranslation();
    return (
        <div>
        </div>
    )
}

export default Main;