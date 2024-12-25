import React from "react";
import { TaskContainer } from "../containers/Task"
import { Text } from "../components/common/Text";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <Text className="text-2xl font-bold text-center p-2">TASK MANAGER</Text>
      </div>
      <div>
        <TaskContainer />
      </div>
    </div>
  );
};

export default Home;
