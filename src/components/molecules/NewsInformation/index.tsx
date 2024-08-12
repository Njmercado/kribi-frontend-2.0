import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AVAILABLE_NEWS } from "../../../constants"
import Markdown from "react-markdown"
import { INews } from "../../../interfaces"

export interface NewsInformationProps {}

export default function NewsInformation({}: NewsInformationProps) {

  const [ news, setNews ] = useState<{data: string}>()

  const params = useParams()
  const labelParam: string = params.label as unknown as string
  const idParam: number = params.id as unknown as number

  function search(prop: 'id' | 'label', valueToSearch: string | number) {
    return AVAILABLE_NEWS.find((item: INews) => item[prop] == valueToSearch) || { data: 'Not found' }
  }
  function searchById() { return search('id', idParam)}
  function searchByLabel() { return search('label', labelParam)}

  useEffect(() => {
    let result: { data: string } = { data: 'Not found' };
    if(idParam) result = searchById()
    else if(labelParam) result = searchByLabel()
    setNews(result)
  }, [])

  return (
    <main>
      <article>
        <section>
          <Markdown>{news?.data}</Markdown>
        </section>
      </article>
    </main>
  )
}