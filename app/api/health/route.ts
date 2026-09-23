import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    status: 'ok',
    app: 'SynHosting',
    timestamp: new Date().toISOString(),
  });
}
