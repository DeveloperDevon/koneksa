import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import AWS from 'aws-sdk'
import { v4 } from 'uuid'

const doc = new AWS.DynamoDB.DocumentClient()
const TableName = 'KoneksaTable'
const headers = {
   'content-type': 'application/json',
}

export const createRecord = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
   const reqBody = JSON.parse(event.body as string)
   const Item = { ...reqBody, id: v4() }
   try {
      await doc.put({ TableName, Item }).promise()
      return {
         statusCode: 200,
         headers,
         body: JSON.stringify(Item),
      }
   } catch (err) {
      return {
         statusCode: 500,
         headers,
         body: JSON.stringify(err),
      }
   }
}

export const getRecords = async (_: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
   try {
      const { Items } = await doc.scan({ TableName }).promise()
      return {
         statusCode: 200,
         headers,
         body: JSON.stringify(Items),
      }
   } catch (err) {
      return {
         statusCode: 500,
         headers,
         body: JSON.stringify(err),
      }
   }
}
