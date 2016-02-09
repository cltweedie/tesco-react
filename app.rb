require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

get '/' do
  cross_origin
 erb :index
end
