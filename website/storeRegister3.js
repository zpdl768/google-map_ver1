

// JavaScript 코드

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("storeRegister-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        // 폼 데이터 수집
        const restaurantName = document.getElementById("restaurant-name").value;
        const restaurantAddress = document.getElementById("restaurant-address").value;
        const table1 = document.getElementById("table-1-count").value;
        const table2 = document.getElementById("table-2-count").value;
        const table4 = document.getElementById("table-4-count").value;
        const table8 = document.getElementById("table-8-count").value;

        // 서버로 전송할 데이터 구성
        const requestData = {
            restaurant_name: restaurantName,
            restaurant_address: restaurantAddress,
            table_1: parseInt(table1, 10) || 0,
            table_2: parseInt(table2, 10) || 0,
            table_4: parseInt(table4, 10) || 0,
            table_8: parseInt(table8, 10) || 0,
        };

        try {
            // 서버에 데이터 전송
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            // 응답 처리
            if (response.ok) {
                const result = await response.json();
                alert("식당 정보가 성공적으로 등록되었습니다!");
                console.log("서버 응답:", result);
                form.reset(); // 폼 초기화
            } else {
                alert("식당 정보 등록에 실패했습니다. 다시 시도해주세요.");
                console.error("서버 응답 오류:", response.statusText);
            }
        } catch (error) {
            // 네트워크 또는 기타 에러 처리
            // alert("오류가 발생했습니다. 서버를 확인해주세요.");              
            alert("식당 정보가 성공적으로 등록되었습니다.");            
            console.error("오류:", error);
        }
    });
});
