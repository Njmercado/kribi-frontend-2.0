import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { AVAILABLE_NEWS } from "../../../constants"

export interface NewsInformationProps {}

export default function NewsInformation({}: NewsInformationProps) {

  const params = useParams()
  const labelParam: string = params.label as unknown as string
  const idParam: number = params.id as unknown as number

  function search(prop: string, valueToSearch: string | number) {
    return AVAILABLE_NEWS.find(item => item[prop] == valueToSearch)
  }
  function searchById() { return search('id', idParam)}
  function searchByLabel() { return search('label', labelParam)}

  useEffect(() => {
    let result;
    if(idParam) result = searchById()
    else if(labelParam) result = searchByLabel()
    console.log(result)
  }, [])

  return (
    <main>
      <article>
        <section>
          <p>news information for {idParam ?? labelParam}</p>
        </section>
      </article>
    </main>
  )
}