
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Post } from "common-types";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
}
const BlogList = ({ posts }: Props) => {

  return (
    <div className="">
      <hr className="border-[#087db4] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer z-10 mb-2">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                {post.mainImage ?
                  < Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    alt={post.title}
                    className="rounded-md object-cover object-left lg:object-center"
                  /> :
                  <div className="w-full h-full bg-[#434343] rounded-md text-center items-center flex justify-center " >
                    <p>Waiting for image...
                    </p>
                  </div>
                }
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString
                        ("sr-Latn-BA", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })
                      }
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories && post.categories.map(category => (
                      category && (
                        <div key={category._id} className="bg-[#0387d4] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                          <p>{category.title}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>

              </div>
              <div className="mt-5 flex-1">
                <p className="text-lg font-bold underline">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>
              <p className="flex items-center font-bold mt-5 group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-5" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList