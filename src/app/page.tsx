  "use client";
  import MyMindMap from "@/components/MyMindMap";
  import { useEffect, useState } from "react";

  type YourModel = {
    id: string;
    title: string;
    Content: string[];
  };

  async function getAllListsOfUnits(): Promise<YourModel[]> {
    try {
      const response = await axios.get("/api/data");
      const data = response.data;
      return data.success ? data.data : [];
    } catch (error) {
      console.error("Error fetching unit data:", error);
      return [];
    }
  }

  export default function Home() {
    const [getAllList, setAllList] = useState<YourModel[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllListsOfUnits();
          setAllList(data);
        } catch (error) {
          console.error("Error fetching unit data:", error);
        }
      };
      fetchData();
    }, []);

    return (
  
      <div>
        <MyMindMap />
    
      </div>
    );
  }
