import chapel from "@/assets/img/chapel.png";
import fastfood from "@/assets/img/fast-food.png";
import clinic from "@/assets/img/health-clinic.png";
import paper from "@/assets/img/paper.png";
import parking from "@/assets/img/parking-area.png";
import shirts from "@/assets/img/shirts.png";
import stair from "@/assets/img/stairs.png";
import toilet from "@/assets/img/toilet.png";

function LegendsBtn() {

  return (
    <div className="inline-flex rounded-md absolute left-0 top-0 invisible md:visible"             
    style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"5px",
        marginLeft:"5px",
    }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            <div style={{ flex: 1, textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>
                Legends:
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#D9D9D9", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={chapel}
                alt="chapel"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                University Chapel
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#03FF1C", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={clinic}
                alt="clinic"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                University Clinic
            </div>
        </div>


        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#CE7E7D", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={fastfood}
                alt="fastfood"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                Food Hub
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#70A8D9", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={parking}
                alt="parking"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                4 Wheel Parking
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#FFEC3D", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={parking}
                alt="parking"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                Motorcycle Parking
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#C9BB8D", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={stair}
                alt="stair"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                Stairs
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#3A7A57", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={shirts}
                alt="shirts"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
            Uniform Claiming Area
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#C06ACE", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={paper}
                alt="paper"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
            Module Claiming Area
            </div>
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"5px",
                marginLeft:"5px",
                backgroundColor: "#FFE177", // Set background color to yellow
                padding: "5px", // Add padding for spacing
                borderRadius: "0px", // Optional: Round the corners
                width: "125px",
            }}
            >
            {/* Column 1: Image */}
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={toilet}
                alt="Toilet"
                style={{
                    width: "30px", // Adjust image size
                    height: "auto",
                }}
                />
            </div>

            {/* Column 2: Label */}
            <div style={{ flex: 1, textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                Comfort Room
            </div>
        </div>
        
      
    </div>
  );
}

export default LegendsBtn;
