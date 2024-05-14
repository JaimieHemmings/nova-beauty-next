import Image from 'next/image'
import profileDefault from '@/assets/images/profile.png'
import ProfileProperties from '@/components/ProfileProperties'
import ConnectDB from '@/config/database'
import { getSessionUser } from '@/utils/getSessionUser'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import Services from '@/models/Services'
import Link from 'next/link'

const ProfilePage = async () => {
  await ConnectDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
  if (!userId) {
    throw new Error('User ID is required');
  }

  // GET the services list
  const Service = await Services.find({}).lean();
  const serviceList = Service.map(convertToSerializeableObject);

    return (
      <section className="container profilePage">
        <div>

          <h1>Your Profile</h1>
          <div className="row">
            <div className="col">
              <Image
                className=''
                src={sessionUser.user.image || profileDefault}
                width={200}
                height={200}
                alt='User'
              />
              <h2>
                <span>Name: </span>{' '}
                {sessionUser.user.name}
              </h2>
              <h2>
                <span>Email: </span>{' '}
                {sessionUser.user.email}
              </h2>
            </div>
            {(sessionUser.user.isAdmin) &&
            <div className="col">
                <button>
                  <Link href="/profile/add-service">
                    Add a service
                  </Link>
                </button>
                <h2 className="serviceListingTitle">Your Service Listings</h2>
                {serviceList.length === 0 ? (
                  <p>You have no service listings</p>
                ) : (
                  <ProfileProperties properties={serviceList} />
                )}
            </div>
            }
          </div>
        </div>
      </section>
    )
}

export default ProfilePage
