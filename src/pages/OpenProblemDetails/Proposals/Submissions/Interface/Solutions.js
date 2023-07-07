import SolutionsComponent from "./SolutionsComponent";
function Solutions() {
  return (
    <>
      <h1 className="py-2 pb-4 text-lg text-theme-blue md:text-xl">
        Submitted Solutions
      </h1>
      <div className="submitted-list border-y border-theme-blue py-2">
        <SolutionsComponent/>
      </div>
    </>
  );
}
export default Solutions;
