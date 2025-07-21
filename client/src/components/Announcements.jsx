import React from 'react';
import { Users } from 'lucide-react';


function Announcements() {
    return <div><section className="flex-1 flex flex-col mx-5">
                 
                  <article className="bg-white rounded-2xl p-4 shadow-[6px_6px_20px_rgba(0,0,0,0.55)] flex-1 overflow-y-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Users size={28} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="font-semibold text-gray-900 text-xl">Dr. Smita Attarde</h3>
                          <time className="text-gray-500 text-lg">Jul 15</time>
                        </div>
                       <div className="text-gray-800 whitespace-pre-line">Hello Students 
                        For SEA, Note down the AOA notebook checking schedule for the entire semester. All should bring your notebook in the given time slot for checkingBatch A1 - Friday - 11.00 am to 11.30 amBatch A2 - Wednesday - 12.00 pm to 12.30 pmBatch A3 - Wednesday - 12.00 pm to 12.30 pm;</div>
                      </div>
                    </div>
                  </article>
                </section></div>;
}

export default Announcements