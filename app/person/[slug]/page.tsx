import Layout from "@/components/Layout";

const PersonDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>ads</Layout>
    </div>
  );
};

export default PersonDetail;
