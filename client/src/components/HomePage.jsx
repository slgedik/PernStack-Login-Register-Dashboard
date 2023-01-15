import React, { useState } from 'react';
import {
  Button,
  Label,
  Menu,
  Segment,
  Image,
  Checkbox,
  Grid,
  Reveal,
  Container,
  Card,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

export default function HomePage() {
  const myStyle = {
    marginTop: '200px',
  };

  return (
    <>
      <div className='explore_button'>
        <h1 className='explore2'>VET-MED'E HOŞGELDİNİZ</h1>
        <h1 className='explore3'>Güvenilir veterinerlik hizmetleri</h1>

        <a className='explore' href='#anchor'>
          Keşfetmeye Başla
        </a>
      </div>
      <div className='full-grid'>
        <Container id='anchor' style={myStyle}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    Randevu Sistemi
                  </Label>

                  <div className='Segmentpic'>
                    <Image
                      src='https://cekirge.sirv.com/WP_www.eminealtiay.com/2020/10/randevu.png?profile=Example&cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=400&h=0'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    Görüntülü Görüşme & Sohbet
                  </Label>

                  <div className='Segmentpic'>
                    <Image
                      src='https://cloud.vetster.com/images/vetster-phone-vet.svg'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    Veteriner Bulma
                  </Label>
                  <div className='Segmentpic'>
                    <Image
                      src='https://cdn-icons-png.flaticon.com/512/4781/4781517.png'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    Aşı Takibi
                  </Label>
                  <div className='Segmentpic'>
                    <Image
                      src='https://animalcare.lacounty.gov/wp-content/uploads/2017/10/vaccination-icon.png'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    İlaç Dozajı Ayarlama
                  </Label>
                  <div className='Segmentpic'>
                    <Image
                      src='https://cdn2.iconfinder.com/data/icons/veterinary-hazel-vol-2/256/Pet-vitamins-512.png'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column href='/'>
                <Segment className='card-back' padded>
                  <Label
                    className='SegmentText'
                    color='violet'
                    attached='top'
                    size='huge'
                  >
                    Profil Görüntüleme
                  </Label>
                  <div className='Segmentpic'>
                    <Image
                      src='https://t4.ftcdn.net/jpg/04/55/79/59/360_F_455795943_a9MvTwK2vShYQyJVdYRpwWGs8verK3z7.jpg'
                      size='medium'
                    />
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </>
  );
}
