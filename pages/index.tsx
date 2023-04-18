import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import VideoTemplate from "@/components/compositions/templates"
import { useState } from "react"

const MyVideoPlayer = dynamic(() => import('../components/remotionPlayer'), {
  loading: () => <p>Loading...</p>,
})

export default function IndexPage() {

  return (
    <Layout>
      <Head>
        <title>Remotion</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyVideoPlayer/>
    </Layout>
  )
}
