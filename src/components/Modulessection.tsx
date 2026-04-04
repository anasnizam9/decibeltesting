// 'use client';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ModulesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabs = [
//     {
//       name: 'Enabling HR Processes',
//       description: 'Transform your organization with our HR process optimization that empower your workforce, drive efficiency, and boost productivity.',
//       modules: [
//         { left: 'Organizational Structure', right: 'Leave Management' },
//         { left: 'Employee Master Data', right: 'Expense Management' },
//         { left: 'Payroll & Benefits', right: 'Travel Management' },
//         { left: 'Attendance and Overtime', right: 'Employee Assets' },
//         { left: 'Shift Management', right: 'Analytics' },
//       ],
//     },
//     {
//       name: 'Talent Management Processes',
//       description: 'Identify, nurture, and retain top talent while enhancing productivity and engagement through data-driven insights.',
//       modules: [
//         { left: 'Talent Acquisition', right: 'Nine Box' },
//         { left: 'Interview Management', right: 'Performance Management' },
//         { left: 'Job Offer Management', right: 'Goals Setting' },
//         { left: 'On Boarding', right: '360 Review' },
//         { left: 'Learning and Development', right: 'Probation Evaluation' },
//         { left: 'Succession Planning', right: '' },
//       ],
//     },
//     {
//       name: 'HR Analytics',
//       description: 'Harness the power of HR Analytics for data-driven workforce decisions. Analyze trends, optimize strategies, and drive performance.',
//       modules: [
//         { left: 'Workforce Analytics' },
//         { left: 'Talent Management Analytics' },
//         { left: 'Performance Analytics' },
//         { left: 'Compensation Analytics' },
//       ],
//     },
//     {
//       name: 'HR Help Desk',
//       description: 'Our 24/7 HR Helpdesk extends your HR department\'s support, ensuring efficient ticket escalation and tracking timely responses for employee issues beyond HRMS and self-service options.',
//       modules: [
//         { left: 'HR Ticketing System' },
//         { left: 'Employee Queries Management' },
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.4 },
//     },
//   };

//   return (
//     <section
//       className="w-full py-6 px-1 md:px-2 modules-bg"
//     >
//       <div className="max-w-3xl mx-auto">
//         {/* Title */}
//         <motion.h1
//           className="text-white text-2xl md:text-3xl font-bold text-center mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Smarter Solutions, Better Results
//         </motion.h1>

//         {/* Tabs */}
//         <motion.div
//           className="flex flex-row flex-nowrap items-center justify-center gap-4 mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           {tabs.map((tab, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`px-4 py-2 rounded-full font-bold text-sm md:text-base transition-all whitespace-nowrap focus:outline-none ${
//                 activeTab === index
//                   ? 'bg-white text-black shadow-sm'
//                   : 'bg-transparent text-white'
//               }`}
//               style={{ border: 'none' }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {tab.name}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
//           {/* Left Side - Description + Modules */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {/* Description */}
//             <p className="text-white text-sm leading-relaxed mb-4 font-sans">
//               {tabs[activeTab].description}
//             </p>

//             {/* Two Column Module Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
//               {/* Left Column */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`left-${activeTab}`}
//                   className="space-y-6"
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {tabs[activeTab].modules.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       className="flex items-center gap-2"
//                     >
//                       <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center">
//                         <div className="w-2 h-2 bg-white rounded-full"></div>
//                       </div>
//                       <div className="flex-1">
//                         <span className="text-white font-sans text-xs">
//                           {item.left}
//                         </span>
//                         <div className="h-0.5 w-6 bg-green-300 mt-1 rounded-full"></div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>

//               {/* Right Column */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`right-${activeTab}`}
//                   className="space-y-6"
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {tabs[activeTab].modules.map((item, index) => (
//                     item.right ? (
//                       <motion.div
//                         key={index}
//                         variants={itemVariants}
//                         className="flex items-center gap-2"
//                       >
//                         <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center">
//                           <div className="w-2 h-2 bg-white rounded-full"></div>
//                         </div>
//                         <div className="flex-1">
//                           <span className="text-white font-semibold text-xs">
//                             {item.right}
//                           </span>
//                           <div className="h-0.5 w-6 bg-green-300 mt-1 rounded-full"></div>
//                         </div>
//                       </motion.div>
//                     ) : null
//                   ))}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Right Side - Image */}
//           <div className="relative flex justify-center items-center w-full">
//             <img
//               src="/images/Decibel_Desktop-2048x1458.jpg"
//               alt="Modules Section Desktop"
//               className="w-[500px] h-auto rounded-xl shadow-lg border-2 border-white/30 object-cover"
//               style={{ maxWidth: '100%', maxHeight: '350px' }}
//             />
//             <img
//               src="/images/Decibel_Mobile-scaled.jpg"
//               alt="Modules Section Mobile"
//               className="absolute right-0 bottom-0 w-[120px] h-auto rounded-xl shadow-xl border-2 border-white/30 object-cover bg-white"
//               style={{ maxWidth: '24%', minWidth: '70px', zIndex: 10, right: '-20px', bottom: '-20px' }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ModulesSection;

// 'use client';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ModulesSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     {
//       name: 'Enabling HR Processes',
//       description: 'Transform your organization with our HR process optimization that empower your workforce, drive efficiency, and boost productivity.',
//       modules: [
//         { left: 'Organizational Structure', right: 'Leave Management' },
//         { left: 'Employee Master Data',     right: 'Expense Management' },
//         { left: 'Payroll & Benefits',       right: 'Travel Management' },
//         { left: 'Attendance and Overtime',  right: 'Employee Assets' },
//         { left: 'Shift Management',         right: 'Analytics' },
//       ],
//     },
//     {
//       name: 'Talent Management Processes',
//       description: 'Identify, nurture, and retain top talent while enhancing productivity and engagement through data-driven insights.',
//       modules: [
//         { left: 'Talent Acquisition',       right: 'Nine Box' },
//         { left: 'Interview Management',     right: 'Performance Management' },
//         { left: 'Job Offer Management',     right: 'Goals Setting' },
//         { left: 'On Boarding',              right: '360 Review' },
//         { left: 'Learning and Development', right: 'Probation Evaluation' },
//         { left: 'Succession Planning',      right: '' },
//       ],
//     },
//     {
//       name: 'Zel- AI Agent',
//       description: "Empowering organizations with a smart AI agent that connects people, policies, and performance through real-time insights.",
//       modules: [
//         { left: 'Employee',           right: '' },
//         { left: 'HR',   right: '' },
//         { left: 'Policy',         right: '' },
//         { left: 'Analytics',        right: '' },
//       ],
//     },
//     {
//       name: 'Zibel',
//       description: "Zibel is a next-generation professional networking platform where ambition meets opportunity and connections turn into success.",
//       modules: [
//         // { left: 'HR Ticketing System',         right: '' },
//         // { left: 'Employee Queries Management', right: '' },
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
//   };

//   const active = tabs[activeTab];

//   return (
//     <section className="w-full py-8 px-4 md:px-8 modules-bg">
//       <div className="max-w-7xl mx-auto">

//         {/* Title */}
//         <motion.h1
//           className="text-white text-2xl md:text-4xl font-bold text-center mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Smarter Solutions, Better Results
//         </motion.h1>

//         {/* Tabs */}
//         <motion.div
//           className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           {tabs.map((tab, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all whitespace-nowrap focus:outline-none ${
//                 activeTab === index
//                   ? 'bg-white text-black shadow-md'
//                   : 'bg-transparent text-white hover:text-white/80'
//               }`}
//               style={{ border: 'none' }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {tab.name}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

//           {/* Left: Description + Modules */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {/* Description */}
//             <p className="text-white text-sm md:text-base leading-relaxed mb-5 max-w-lg">
//               {active.description}
//             </p>

//             {/* Two-column module list */}
//             <div className="grid grid-cols-2 gap-x-8">
//               {/* Left column */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`left-${activeTab}`}
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit={{ opacity: 0 }}
//                 >
//                   {active.modules.map((item, i) => (
//                     <motion.div key={i} variants={itemVariants} className="mb-3">
//                       <div className="flex items-center gap-3 mb-1">
//                         {/* Blue dot */}
//                         <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow">
//                           <div className="w-2 h-2 bg-white rounded-full" />
//                         </div>
//                         <span className="text-white font-semibold text-sm md:text-base">
//                           {item.left}
//                         </span>
//                       </div>
//                       {/* Full-width divider line */}
//                       <div className="h-px bg-white/30 ml-8" />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>

//               {/* Right column */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`right-${activeTab}`}
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit={{ opacity: 0 }}
//                 >
//                   {active.modules.map((item, i) =>
//                     item.right ? (
//                       <motion.div key={i} variants={itemVariants} className="mb-3">
//                         <div className="flex items-center gap-3 mb-1">
//                           <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow">
//                             <div className="w-2 h-2 bg-white rounded-full" />
//                           </div>
//                           <span className="text-white font-semibold text-sm md:text-base">
//                             {item.right}
//                           </span>
//                         </div>
//                         <div className="h-px bg-white/30 ml-8" />
//                       </motion.div>
//                     ) : (
//                       /* Empty placeholder to keep row alignment */
//                       <div key={i} className="mb-3" style={{ height: '38px' }} />
//                     )
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Right: Desktop + Mobile screenshots */}
//           <div className="relative flex justify-center items-center w-full">
//             {/* Desktop screenshot */}
//             <motion.img
//               src="/images/Decibel_Desktop-2048x1458.jpg"
//               alt="Decibel Desktop"
//               className="rounded-2xl shadow-2xl border-2 border-white/20 object-cover w-full"
//               style={{ maxWidth: '520px', maxHeight: '370px' }}
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             />
//             {/* Mobile screenshot — overlapping bottom-right */}
//             <motion.img
//               src="/images/Decibel_Mobile-scaled.jpg"
//               alt="Decibel Mobile"
//               className="absolute rounded-2xl shadow-2xl border-2 border-white/20 object-cover bg-white"
//               style={{
//                 width: '130px',
//                 bottom: '-16px',
//                 right: '-10px',
//                 zIndex: 10,
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               viewport={{ once: true }}
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ModulesSection;

'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'Enabling HR Processes',
      description: 'Transform your organization with our HR process optimization that empower your workforce, drive efficiency, and boost productivity.',
      modules: [
        { left: 'Organizational Structure', right: 'Leave Management' },
        { left: 'Employee Master Data',     right: 'Expense Management' },
        { left: 'Payroll & Benefits',       right: 'Travel Management' },
        { left: 'Attendance and Overtime',  right: 'Employee Assets' },
        { left: 'Shift Management',         right: 'Analytics' },
      ],
      desktopImg: '/images/Decibel_Desktop-2048x1458.jpg',
      mobileImg:  '/images/Decibel_Mobile-scaled.jpg',
    },
    {
      name: 'Talent Management Processes',
      description: 'Identify, nurture, and retain top talent while enhancing productivity and engagement through data-driven insights.',
      modules: [
        { left: 'Talent Acquisition',       right: 'Nine Box' },
        { left: 'Interview Management',     right: 'Performance Management' },
        { left: 'Job Offer Management',     right: 'Goals Setting' },
        { left: 'On Boarding',              right: '360 Review' },
        { left: 'Learning and Development', right: 'Probation Evaluation' },
        { left: 'Succession Planning',      right: '' },
      ],
      desktopImg: '/images/Decibel_Desktop-2048x1458.jpg',
      mobileImg:  '/images/Decibel_Mobile-scaled.jpg',
    },
    {
      name: 'Zel- AI Agent',
      description: 'Empowering organizations with a smart AI agent that connects people, policies, and performance through real-time insights.',
      modules: [
        { left: 'Employee',  right: '' },
        { left: 'HR',        right: '' },
        { left: 'Policy',    right: '' },
        { left: 'Analytics', right: '' },
      ],
      desktopImg: '/images/zel desktop.jpg',
      mobileImg:  '/images/zel mobile.png',
    },
    {
      name: 'Zibel',
      description: 'Zibel is a next-generation professional networking platform where ambition meets opportunity and connections turn into success.',
      modules: [
         { left: 'Employee',  right: '' },
        { left: 'HR',        right: '' },
      ],
      desktopImg: '/images/zibel desktop.png',
      mobileImg:  '/images/zilbel mobile.jpeg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const active = tabs[activeTab];

  return (
    <section className="w-full py-8 px-4 md:px-8 modules-bg">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          className="text-white text-2xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Smarter Solutions, Better Results
        </motion.h1>

        {/* Tabs */}
        <motion.div
          className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all whitespace-nowrap focus:outline-none ${
                activeTab === index
                  ? 'bg-white text-black shadow-md'
                  : 'bg-transparent text-white hover:text-white/80'
              }`}
              style={{ border: 'none' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Left: Description + Modules */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Description */}
            <p className="text-white text-sm md:text-base leading-relaxed mb-5 max-w-lg">
              {active.description}
            </p>

            {/* Two-column module list — only if modules exist */}
            {active.modules.length > 0 && (
              <div className="grid grid-cols-2 gap-x-8">
                {/* Left column */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${activeTab}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                  >
                    {active.modules.map((item, i) => (
                      <motion.div key={i} variants={itemVariants} className="mb-3">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-white font-semibold text-sm md:text-base">
                            {item.left}
                          </span>
                        </div>
                        <div className="h-px bg-white/30 ml-8" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Right column */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`right-${activeTab}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                  >
                    {active.modules.map((item, i) =>
                      item.right ? (
                        <motion.div key={i} variants={itemVariants} className="mb-3">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-white font-semibold text-sm md:text-base">
                              {item.right}
                            </span>
                          </div>
                          <div className="h-px bg-white/30 ml-8" />
                        </motion.div>
                      ) : (
                        <div key={i} className="mb-3" style={{ height: '38px' }} />
                      )
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* Right: Desktop + Mobile screenshots */}
          <div className="relative flex justify-center items-center w-full">
            {/* Desktop screenshot */}
            <motion.img
              key={`desktop-${activeTab}`}
              src={active.desktopImg}
              alt="Desktop"
              className="rounded-2xl shadow-2xl border-2 border-white/20 object-cover w-full"
              style={{ maxWidth: '520px', maxHeight: '370px' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* Mobile screenshot — overlapping bottom-right */}
            <motion.img
              key={`mobile-${activeTab}`}
              src={active.mobileImg}
              alt="Mobile"
              className="absolute rounded-2xl shadow-2xl border-2 border-white/20 object-cover bg-white"
              style={{
                width: '130px',
                bottom: '-16px',
                right: '-10px',
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModulesSection;