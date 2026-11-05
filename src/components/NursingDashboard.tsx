
import React, { useState } from 'react';
import { Patient } from '../App';

interface NursingDashboardProps {
  patient: Patient;
}

const NursingDashboard: React.FC<NursingDashboardProps> = () => {
  return (
    <div className="flex flex-col h-full bg-white p-4 overflow-y-auto">
      {/* Content Area */}
      <div className="flex gap-4 flex-1 overflow-hidden">
        <div className="flex-1 border-2 border-black p-4 flex flex-col bg-white">
          <h2 className="text-[20.25px] text-black w-[90px] text-center border-2 border-black rounded-[7px] ml-[8px] mr-[8px] mt-[8px] font-normal bg-[#9c9c9c]">처방 내역</h2>
          <textarea className="w-full flex-1 border border-gray-300 p-2 text-[14.25px]" placeholder="처방 내역을 입력하세요." spellCheck={false} />
        </div>
        <div className="flex-1 border-2 border-black p-4 flex flex-col bg-white overflow-hidden">
          <h2 className="text-[21.25px] font-normal text-center w-[91px] border border-black rounded-[7px] h-[39.92px] text-black ml-[8px] mr-[8px] mt-[8px] mb-[8px]">간호 기록 내역</h2>
          
          <div className="flex-1 overflow-y-auto space-y-4">
            {/* 기록 내역이 여기에 표시됩니다. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NursingDashboard;
