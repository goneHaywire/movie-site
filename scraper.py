from bs4 import BeautifulSoup
import requests
import shutil
import json

url = "https://www.imdb.com/list/ls055592025/"
all_movies = []

page = requests.get(url).text

soup = BeautifulSoup(page, 'html.parser')

movie_list = soup.find('div', {'class': 'lister-list'})
movies = movie_list.findAll('div', {'class': 'lister-item'})

for movie in movies:
    title = movie.find('div', {'class': 'lister-item-content'}).find('a').text
    year = movie.find('span', {'class': 'lister-item-year'}).text
    desc = movie.find(
        'div', {'class': 'lister-item-content'}).findAll('p')[1].text.replace('\n', '').replace('\t', '')[4:]
    people = movie.find('div', {'class': 'lister-item-content'}
                        ).findAll('p', {'class': 'text-muted'})[-2].text.replace('\n', '').replace('|', '').replace('Director:', '').replace('Stars:', '')[4:]
    people_list = people.split('     ')
    director = people_list[0]
    actors = people_list[1].split(", ")
    movie_info = movie.find(
        'div', {'class': 'lister-item-content'}).find('p', {'class': 'text-muted'}).text.replace('\n', '').rstrip()

    length, genres = '', ''
    movie_info_list = movie_info.split('|')

    if movie_info[0].isnumeric():
        length = movie_info_list[0]
        genres = movie_info_list[1].split(', ')
    else:
        length = movie_info_list[1]
        genres = movie_info_list[2].split(', ')

    # print(movie_info)
    # print(length, genres)

    img = movie.find('img')['loadlate']

    # r = requests.get(img, stream=True)
    # r.raw.decode_content = True

    # with open('imgs/'+title+img[-4:], 'wb') as image_file:
    #     shutil.copyfileobj(r.raw, image_file)
    #     image_file.close()

    movie_dict = {
        "title": title,
        "desc": desc,
        "director": director,
        "stars": actors,
        "genres": genres,
        "length": length,
        "image": title+".png",
        "year": year[1:-1]
    }

    all_movies.append(movie_dict)

    # print(movie_dict)
    # print(title)
    # print(img)
    # print(desc)
    # print(director)
    # print(actors)
    # print(genres)
    # print(length)
    # print()

# with (open('movies.json', 'wb')) as fp:
# print(json.dumps(all_movies))

# print(len(movies))
