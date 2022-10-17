const FIREBASE_DOMAIN = 'https://ed1expences-default-rtdb.firebaseio.com/';


export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
    console.log(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok ) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  if(loadedQuote ){
    return loadedQuote;
  }
 
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok ) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

// delete 
export async function removeQuote(props) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'DELETE',
    body: JSON.stringify(props),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok ) {
    throw new Error(data.message || 'Could not create task.');
  }

  

  return null;
}


