import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"

export const revalidate = 30
const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

function PreviewSuspenseFallback() {
  return (
    <div role="status">
      <p className="animate-pulse text-center text-lg text-zinc-800">
        Loading Preview Data...
      </p>
    </div>
  )
}

const HomePage = async () => {

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={<PreviewSuspenseFallback></PreviewSuspenseFallback>}
      >
        <PreviewBlogList query={query}></PreviewBlogList>
        {/* <h1>PREVIEW MODE</h1> */}
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  // return (
  //   <h1>Not in preview mode</h1>
  // )
  return (
    <>
      <div className="">
        <BlogList posts={posts} ></BlogList>
        {/* <h1>Not PREVIEW mode</h1> */}
      </div>
    </>
  )

}
export default HomePage