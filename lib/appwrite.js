import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io.v1",
  platform: "com.bouchtarate.auras",
  projectId: "66241ad001f7562ff10f",
  databaseId: "66241d5123e0ef373cfb",
  userCollectionId: "66241d79a1850cdf3f12",
  videoCollectionId: "66241dece84b0fcd124c",
  storageId: "662424fdb7002823ce3f",
};

//Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account
    .create(ID.unique, "bouchtarate@example.com", "password", "kyujin kun")
    .then(
      function (res) {
        console.log(res);
      },
      function (err) {
        console.log(err);
      }
    );
};

//register User
