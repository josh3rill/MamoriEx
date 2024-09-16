import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from "expo-router";



// Define ProfileAndBookmarkComponent
const ProfileAndBookmarkComponent = () => {
  const profileImageUrl = 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg'; // Replace with your actual image URL

  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: profileImageUrl }} style={styles.profileImageLarge} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>Hi John!</Text>
        <Text style={styles.scans}>50+ Scans</Text>
      </View>
      <View style={styles.bookmarkContainer}>
        <View style={styles.bookmarkContent}>
          <Image source={require('../../assets/images/icon.png')} style={styles.bookmarkImage} />
          <Text style={styles.bookmarkCount}>124</Text>
        </View>
        <Text style={styles.bookmarkLabel}>View Entries</Text>
      </View>
    </View>
  );
};

const ExpoComponent = () => {
  return (
    <View style={stylesExpo.container}>
      {/* Search Icon */}
      <TouchableOpacity style={stylesExpo.iconBox}>
        <View style={[stylesExpo.circleContainer, { backgroundColor: 'white' }]}>
          <FontAwesome name="search" size={24} color="black" />
        </View>
        <Text style={stylesExpo.iconText}>
          Find{'\n'}Products
        </Text>
      </TouchableOpacity>

      {/* Camera Icon */}
      <TouchableOpacity style={stylesExpo.iconBox}>
        <View style={[stylesExpo.circleContainer, { backgroundColor: '#FFB400' }]}>
          <FontAwesome name="camera" size={24} color="white" />
        </View>
        <Text style={stylesExpo.iconText}>
          Take{'\n'}Photos
        </Text>
      </TouchableOpacity>

      {/* Bookmark Icon */}
      <TouchableOpacity style={stylesExpo.iconBox}>
        <View style={[stylesExpo.circleContainer, { backgroundColor: '#41dc8e' }]}>
          <FontAwesome name="bookmark" size={24} color="white" />
        </View>
        <Text style={stylesExpo.iconText}>
          Earn{'\n'}Tickets
        </Text>
      </TouchableOpacity>
    </View>
  );
};



const StoresComponent = () => {
  return (
    <View style={stylesStores.container}>
      {/* Welbees Supermarket */}
      <View style={stylesStores.storeBox}>
        <Image 
          source={{ uri: 'https://welbees.mt/dist/images/svg/logo-welbees-green-medium-120.svg' }} 
          style={stylesStores.storeImage} 
        />
        <View style={stylesStores.labelAndLinkContainer}>
          <Text style={stylesStores.storeLabel}>€1,000</Text>
          <TouchableOpacity>
            <Text style={stylesStores.linkText}>SHOPPING VOUCHER</Text>
          </TouchableOpacity>
        </View>
      </View>
     
      {/* Greens Supermarket */}
      <View style={stylesStores.storeBox}>
        <Image 
          source={{ uri: 'https://www.greens.com.mt/assets/images/greenslogo-dark.svg' }} 
          style={stylesStores.storeImage} 
        />
        <View style={stylesStores.labelAndLinkContainer}>
          <Text style={stylesStores.storeLabel}>€100</Text>
          <TouchableOpacity>
            <Text style={stylesStores.linkText}>SHOPPING VOUCHER</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* PAVI Supermarket */}
      <View style={stylesStores.storeBox}>
        <Image 
          source={{ uri: 'https://pavipama.com.mt/app/static/media/PAVI-PAMA-LOGO-blue.3d9d4443.png' }} 
          style={stylesStores.storeImage} 
        />
        <View style={stylesStores.labelAndLinkContainer}>
          <Text style={stylesStores.storeLabel}>€50</Text>
          <TouchableOpacity>
            <Text style={stylesStores.linkText}>SHOPPING VOUCHER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesStores = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-around', // Spread out boxes evenly
    alignItems: 'center', // Align items vertically centered
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  storeBox: {
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: 110,  // Adjusted width for a balanced look
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  storeImage: {
    width: 80,  // Set logo width
    height: 50, // Set logo height
    resizeMode: 'contain',// Ensure the logo is contained without distortion
    marginBottom: 8,
  },
  labelAndLinkContainer: {
    backgroundColor: '', // Background color for both label and link
    alignSelf: 'center', // Make the container fill the width of the parent
    alignItems: 'center', // Center items horizontally inside the container
    borderBottomLeftRadius: 0, // Rounded corners at the bottom to match storeBox
    borderBottomRightRadius: 0, // Rounded corners at the bottom to match storeBox
  },
  storeLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  linkText: {
    fontSize: 5,
    color: '#df6912', // Color for "Shop Now" links
    marginTop: 5,
  },
});


const DetailsComponent = () => {
  return (
    <View style={stylesDetials.container}>
      {/* Scans Today */}
      <View style={stylesDetials.detailBox}>
        <Text style={stylesDetials.numberText}>6</Text>
        <Text style={stylesDetials.labelText}>Scans</Text>
        <Text style={stylesDetials.labelText}>Today</Text>
        <TouchableOpacity>
          <Text style={stylesDetials.linkText}>View Scans</Text>
        </TouchableOpacity>
      </View>

      {/* Tickets Earned */}
      <View style={stylesDetials.detailBox}>
        <Text style={stylesDetials.numberText}>+12</Text>
        <Text style={stylesDetials.labelText}>Tickets</Text>
        <Text style={stylesDetials.labelText}>Earned</Text>
        <TouchableOpacity>
          <Text style={stylesDetials.linkText}>View Entries</Text>
        </TouchableOpacity>
      </View>

      {/* Total Tickets */}
      <View style={stylesDetials.detailBox}>
        <Text style={stylesDetials.numberText}>10</Text>
        <Text style={stylesDetials.labelText}>Total </Text>
        <Text style={stylesDetials.labelText}>Ticket </Text>
        <TouchableOpacity>
          <Text style={stylesDetials.linkText}>View Entries</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesDetials = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',   // Align all items in the center
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  detailBox: {
    alignItems: 'center',   // Center content horizontally
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: 110,  // Adjusted width for a better look
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  numberText: {
    fontSize: 26,  // Increased font size for numbers
    fontWeight: 'bold',
    color: '#333',
  },
  labelText: {
    fontSize: 14,
    color: '#777',
    justifyContent: 'space-around'
  },
  linkText: {
    fontSize: 12,
    color: '#df6912',
    marginTop: 5,
  },
  blueLinkText: {
    fontSize: 12,
    color: '#df6912',  // Set "View Scans" link to blue
    marginTop: 5,
  },
});

//  the main screen component
export default function TabOneScreen() {
  return (
    <View style={styles.mainContainer}>
      <ProfileAndBookmarkComponent />
      <ExpoComponent />
      <CountdownComponent/>
      <DetailsComponent/>
      <StoresComponent/>
      <FullWidthButton/>
      <OutlineButton/>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

//  styles for the entire TabOneScreen
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 3,  // Add some padding for spacing
    justifyContent: 'flex-start', // Align content to the top
    backgroundColor: '#fffce9',  // Set the background color to #fffce9
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  profileImageLarge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  scans: {
    color: 'black',
    fontSize: 10,
  },
  bookmarkContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookmarkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookmarkImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  bookmarkCount: {
    fontWeight:'bold',
    color: 'black',
    fontSize: 20,
  },
  bookmarkLabel: {
    color: 'black',
    fontSize: 10,
  },
});


const OutlineButton = ({}) => {
  return (
    <View style={stylesOut.container}>
      <TouchableOpacity style={stylesOut.button}>
        <Text style={stylesOut.buttonText}>Share with Friends & Win</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesOut = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center',      // Center the button horizontally
    paddingHorizontal: 10,     // Add some horizontal padding so the button has space on edges
    width: '100%',             // Make sure the container is full width
  },
  button: {
    backgroundColor: 'transparent', // Example color, you can change it to any hex or named color
    paddingVertical: 15,        // Vertical padding for button height
    borderRadius: 30,
    borderColor: '#41dc8e',
    borderWidth: 1,           // Rounded edges
    width: '100%',              // Button stretches from end to end
    alignItems: 'center',       // Center the text horizontally
  },
  buttonText: {
    color: '#41dc8e',              // White text color
    fontSize: 16,               // Text size
    fontWeight: 'bold',         // Bold text
  },
});

//   return (
//     <TouchableOpacity style={stylesOut.button} >
//       <Text style={stylesOut.buttonText}>hjjjjjh</Text>
//     </TouchableOpacity>
//   );
// };

// const stylesOut = StyleSheet.create({
//   button: {
//     backgroundColor: 'transparent', // Transparent background
//     paddingVertical: 13,            // Vertical padding for height
//     borderRadius: 25,               // Rounded edges
//     borderColor: '#41dc8e',         // Blue border
//     borderWidth: 1,                 // Border thickness
//     width: '50%',                  // Button stretches from end to end
//     alignItems: 'center',           // Center text horizontally
//   },
//   buttonText: {
//     color: '#41dc8e',               // Blue text color
//     fontSize: 16,                   // Text size
//     fontWeight: 'bold',             // Bold text
//   },
// });



const CountdownComponent = () => {
  const [countdownDate, setCountdownDate] = useState(null); // Initially null
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [lotteryData, setLotteryData] = useState(null); // To store the API data

  useEffect(() => {
    // Fetch the API data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.mockfly.dev/mocks/d29981f2-3648-4069-8b68-c300eab0dfc1/lottery/next-draw'
        );
        const result = await response.json();
        if (result.status === 'success') {
          setLotteryData(result.data);
          const { date, time } = result.data.next_draw;
          setCountdownDate(new Date(`${date}T${time}Z`)); // Use the fetched date and time
        }
      } catch (error) {
        console.error('Error fetching lottery data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!countdownDate) return; // Wait for countdownDate to be set

    const intervalId = setInterval(() => {
      const now = moment();
      const countdownMoment = moment(countdownDate);
      const timeDifference = countdownMoment.diff(now, 'seconds');

      if (timeDifference <= 0) {
        clearInterval(intervalId);
      } else {
        setDays(moment.duration(timeDifference, 'seconds').days());
        setHours(moment.duration(timeDifference, 'seconds').hours());
        setMinutes(moment.duration(timeDifference, 'seconds').minutes());
        setSeconds(moment.duration(timeDifference, 'seconds').seconds());
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  if (!lotteryData || !countdownDate) {
    return <Text>Loading...</Text>; // Simple loading state while data is being fetched
  }

  const { lottery_name, draw_number, next_draw, prize_pool, draw_location } = lotteryData;
  const drawDate = moment(countdownDate).format('DD'); // Day of the month
  const drawMonth = moment(countdownDate).format('MMMM').toUpperCase(); // Full month name
  const drawTime = moment(countdownDate).format('HH:mm'); // Time in 24-hour format

  return (
    <View style={stylesDraw.outerContainer}>
      {/* Left side: Date */}
      <View style={stylesDraw.leftContainer}>
        <Text style={stylesDraw.dateText}>
          {drawDate}
          {'\n'}
          {drawMonth}
          {'\n'}
          {drawTime}
        </Text>
      </View>

      {/* Right side: Countdown */}
      <LinearGradient
        colors={['#FFB400', 'rgba(255, 180, 0, 0)']}
        style={stylesDraw.rightContainer}
      >
        <Text style={stylesDraw.countdownText}>Next Draw</Text>
        
       
        <View style={stylesDraw.countdownContainer}>
          <View style={stylesDraw.timeBlock}>
            <Text style={stylesDraw.countdownNumber}>{days}</Text>
            <Text style={stylesDraw.countdownLabel}>Days</Text>
          </View>
          <View style={stylesDraw.timeBlock}>
            <Text style={stylesDraw.countdownNumber}>{hours}</Text>
            <Text style={stylesDraw.countdownLabel}>Hours</Text>
          </View>
          <View style={stylesDraw.timeBlock}>
            <Text style={stylesDraw.countdownNumber}>{minutes}</Text>
            <Text style={stylesDraw.countdownLabel}>Minutes</Text>
          </View>
          <View style={stylesDraw.timeBlock}>
            <Text style={stylesDraw.countdownNumber}>{seconds}</Text>
            <Text style={stylesDraw.countdownLabel}>Seconds</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};






const FullWidthButton = () => {
  return (
    <View style={stylesBut.container}>
      <TouchableOpacity style={stylesBut.button}>
        <Text style={stylesBut.buttonText}>Scan Products & Win</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesBut = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center',      // Center the button horizontally
    paddingHorizontal: 10,     // Add some horizontal padding so the button has space on edges
    width: '100%',             // Make sure the container is full width
  },
  button: {
    backgroundColor: '#41dc8e', // Example color, you can change it to any hex or named color
    paddingVertical: 15,        // Vertical padding for button height
    borderRadius: 30,           // Rounded edges
    width: '100%',              // Button stretches from end to end
    alignItems: 'center',       // Center the text horizontally
  },
  buttonText: {
    color: '#fff',              // White text color
    fontSize: 16,               // Text size
    fontWeight: 'bold',         // Bold text
  },
});







const stylesDraw = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
  },
  leftContainer: {
    flex: 0.3,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10, 
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  dateText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
  countdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 16,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeBlock: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  countdownNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdownLabel: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
});


// Define styles specifically for ExpoComponent
const stylesExpo = StyleSheet.create({
  container: {
    flexDirection: 'row',    // Horizontal layout
    justifyContent: 'space-evenly',  // Space the items evenly
    alignItems: 'center',    // Ensure all items are aligned vertically in the center
    padding: 16,
    width: '100%',  // Ensure the container stretches to fill the width
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    width: 90,               // Set a fixed width
    height: 100,             // Set a fixed height for all containers
    
  },
  circleContainer: {
    marginTop: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
    textAlign: 'center',  // Ensure text is centered
    marginBottom: 5
  },
});
