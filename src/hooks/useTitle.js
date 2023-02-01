import { useEffect } from "react"

export const useTitle = (title, dependencies = []) => {

    if (!Array.isArray(dependencies)) {
        console.error("No se paso un array como dependencias en useTitle")
        dependencies = []
    }

    useEffect(() => {
        document.title = title
    }, dependencies) //eslint-disable-line

}