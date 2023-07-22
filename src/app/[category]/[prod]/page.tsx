import ProdPage from "./ProdPage"



const Prod = ({params}:{params:{prod:string}}) => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
        <ProdPage params={params} />
</section>

    </div>
  )
}

export default Prod