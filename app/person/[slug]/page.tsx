import Layout from "@/components/Layout";
import DetailPerson from "@/components/detail/person/DetailPerson";
import SideDetailPerson from "@/components/detail/person/SideDetailPerson";

const PersonDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>
        <div className="flex py-5">
          <div className="w-[25%] mx-5">
            <SideDetailPerson />
          </div>
          <div>
            <DetailPerson />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PersonDetail;
