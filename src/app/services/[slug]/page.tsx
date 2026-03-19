import { Metadata } from 'next'
import { allServices } from '@/data/services'
import ServicePageTemplate from '@/components/service-page-template'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = allServices.find(s => s.id === slug)
  if (!service) return { title: 'Service Not Found | LuminoidX' }
  return {
    title: `${service.title} | LuminoidX`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  return <ServicePageTemplate slug={slug} />
}
