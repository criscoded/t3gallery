import {Modal} from "./modal";
import FullPageImage from "~/components/full-image-page";

export default async function PhotoModal(
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

    return (
        <Modal>
            <FullPageImage photoId={idAsNumber} />
        </Modal>
    );
}