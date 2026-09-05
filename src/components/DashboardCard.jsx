const DashboardCard = ({ title, value }) => {

    return (
        <div className="col-md-6 col-xl-3">

            <div className="dashboard-card">

                <h6>
                    {title}
                </h6>

                <h2>
                    {value}
                </h2>

            </div>

        </div>
    );
};

export default DashboardCard;