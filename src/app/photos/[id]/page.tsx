import FullPageImage from "~/components/full-image-page";

export default async function PhotoPage(
    props: {
        params: Promise<{ id: string }>;
    }
) {
    const params = await props.params;
    const photoId = params.id;

    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo ID");
    }

    return <FullPageImage photoId={idAsNumber} />
}