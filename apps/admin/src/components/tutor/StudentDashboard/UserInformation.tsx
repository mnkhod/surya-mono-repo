import moment from "moment";


export default function UserInformation({ studentInformation, languageLevels }: any) {

  if (!studentInformation) {
    return <>Loading</>
  }

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150', // Increased image size
    role: 'Administrator',
    lastLogin: '2x30 AM',
    credit: 5000,
  };

  return (
    <div className="bg-white p-4 shadow rounded w-full md:w-1/2">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img src={studentInformation.profileImageLink} alt="User Avatar" className="w-32 h-32 rounded-full" />
        </div>
        <div className="md:pl-4">
          <h2 className="text-lg font-semibold">Full name: {studentInformation.firstName} {studentInformation.lastName}</h2>
          <p className="text-gray-600">Registered date: {moment(new Date(studentInformation.createdAt)).format('MMMM Do, h:mm:ss a')}</p>
          <p className="text-gray-600">Demo credits: {studentInformation.remainingDemo}</p>
          <p className="text-gray-600">Purchased credits: {studentInformation.remainingPurchase}</p>
          <p className="text-gray-600">Age: {moment().diff(moment(new Date(studentInformation.birthdate)), 'years') + 1}</p>
          {languageLevels.map((level: any) => {
            return (
              <p className="text-gray-600">
                Level: {level.languageName} {level.languageLevel}
              </p>
            )
          })}
        </div>
      </div>
    </div >
  )
}