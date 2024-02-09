export default function ItemDescription({ itemData }) {
  const descriptionCheck = Boolean(itemData.item_description === null);

  return (
    <>
      {descriptionCheck ? (
        ""
      ) : (
        <div>
          <div className="border-b border-gray-300 px-3"></div>
          <div className="flex flex-col py-3 px-2">
            <span>{itemData.item_description}</span>
          </div>
        </div>
      )}
    </>
  );
}
