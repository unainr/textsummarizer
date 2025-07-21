import DemoText from '@/components/Demotext'
import { modelCards } from '@/lib/model-data'
import React from 'react'
interface DemoPageProps {
 params: Promise<{ id: string }>

}
export async function generateStaticParams() {
  return modelCards.map((card) => ({
    id: card.id,
  }));
}
const page = async ({ params}: DemoPageProps) => {
    const {id} = await params
  return (
    <div>
      <DemoText cardId={id}/>
    </div>
  )
}

export default page