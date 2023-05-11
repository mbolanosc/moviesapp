import React, { useState, useEffect, Fragment, useContext } from 'react';
import {
	doc,
	onSnapshot,
	updateDoc,
	setDoc,
	deleteDoc,
	collection,
	serverTimestamp,
	getDocs,
	query,
	where,
	orderBy,
	limit,
  } from 'firebase/firestore';
  import db from './firebase';
  import { v4 as uuidv4 } from 'uuid';
  import {getAuth} from "firebase/auth";
