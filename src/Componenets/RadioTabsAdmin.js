import RadioTabOne from "./RadioTabOne";

function RadioTabsAdmin() {
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted mb-5">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-custom_darkbrown"
          aria-label="مدیریت منو"
        />
        <div
          role="tabpanel"
          className="tab-content bg-custom_darkbrown border-base-300 rounded-box p-6"
        >
          <RadioTabOne />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab  font-extrabold"
          aria-label="مدیریت صفحه اصلی"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="مدیریت کاربران"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </>
  );
}

export default RadioTabsAdmin;
